local M = {}

-- 设置随机数种子
-- math.randomseed(tonumber(tostring(os.time()):reverse():sub(1, 6)))

-- 获取充能延迟
local function getRechargeDelay(param)
    local mana_recharge_delay = param.mana_recharge_delay
    if (mana_recharge_delay == nil) then return nil end
    return mana_recharge_delay
end

-- 获取充能速度
local function getRechargeValue(param)
    local mana_recharge_value = param.mana_recharge_value
    if (mana_recharge_value == nil) then return nil end
    return mana_recharge_value
end

-- 获取射弹数量
local function getProjectileCount(param)
    local ammo_count = param.ammo_count
    if (ammo_count == nil) then return nil end
    return ammo_count
end

-- 获取武器特殊id
local function getWeaponType(param)
    local weapon_type = param.weapon_type
    if (weapon_type == nil) then return nil end
    return weapon_type
end

-- 两个触发器特殊散布偏移
local function random_offset()
    return math.random() - 0.5
end

local function countManaConsume(api)
    -- 初始值
    local consume_ammo = 0
    local mod_rate = 0
    local doubled = 0
    -- 计算 事件符 第一加区
    if (api:getAttachment("GRIP") == "ars_armorer:spell_damage") then
        consume_ammo = consume_ammo + 15
    elseif (api:getAttachment("GRIP") == "ars_armorer:spell_damage_p") then
        consume_ammo = consume_ammo + 22
    elseif (api:getAttachment("GRIP") == "ars_armorer:spell_damage_pp") then
        consume_ammo = consume_ammo + 30
    elseif (api:getAttachment("GRIP") == "ars_armorer:spell_ignite") then
        consume_ammo = consume_ammo + 13
    elseif (api:getAttachment("GRIP") == "ars_armorer:spell_ignite_p") then
        consume_ammo = consume_ammo + 20
    elseif (api:getAttachment("GRIP") == "ars_armorer:spell_crit") then
        consume_ammo = consume_ammo + 17
    elseif (api:getAttachment("GRIP") == "ars_armorer:spell_crit_p") then
        consume_ammo = consume_ammo + 25
    elseif (api:getAttachment("GRIP") == "ars_armorer:spell_crit_pp") then
        consume_ammo = consume_ammo + 32
    elseif (api:getAttachment("GRIP") == "ars_armorer:spell_explode") then
        consume_ammo = consume_ammo + 50
    elseif (api:getAttachment("GRIP") == "ars_armorer:spell_explode_p") then
        consume_ammo = consume_ammo + 100
    elseif (api:getAttachment("GRIP") == "ars_armorer:spell_suppression") then
        consume_ammo = consume_ammo + 12
    elseif (api:getAttachment("GRIP") == "ars_armorer:spell_suppression_p") then
        consume_ammo = consume_ammo + 18
    elseif (api:getAttachment("GRIP") == "ars_armorer:spell_penetrate") then
        consume_ammo = consume_ammo + 12
    elseif (api:getAttachment("GRIP") == "ars_armorer:spell_penetrate_p") then
        consume_ammo = consume_ammo + 18
    elseif (api:getAttachment("GRIP") == "ars_armorer:spell_penetrate_pp") then
        consume_ammo = consume_ammo + 24
    elseif (api:getAttachment("GRIP") == "ars_armorer:spell_penetrate_incendiary") then
        consume_ammo = consume_ammo + 17
    elseif (api:getAttachment("GRIP") == "ars_armorer:spell_penetrate_incendiary_p") then
        consume_ammo = consume_ammo + 25
    elseif (api:getAttachment("GRIP") == "ars_armorer:spell_penetrate_incendiary_pp") then
        consume_ammo = consume_ammo + 32
    end
    -- 计算 修饰符 乘算 第一乘区
    if (api:getAttachment("STOCK") == "ars_armorer:mod_high_damage") then
        mod_rate = mod_rate + 0.2
    elseif (api:getAttachment("STOCK") == "ars_armorer:mod_low_damage") then
        mod_rate = mod_rate - 0.4
    elseif (api:getAttachment("STOCK") == "ars_armorer:mod_low_consume") then
        mod_rate = mod_rate - 0.4
    elseif (api:getAttachment("STOCK") == "ars_armorer:mod_proficient_utilization") then
        mod_rate = mod_rate - 0.2
    end
    -- 计算 触发器 乘算 第二乘区
    if (api:getAttachment("MUZZLE") == "ars_armorer:trigger_high_speed") then
        mod_rate = mod_rate + 0.1
    elseif (api:getAttachment("MUZZLE") == "ars_armorer:trigger_slow_speed") then
        mod_rate = mod_rate - 0.1
    elseif (api:getAttachment("MUZZLE") == "ars_armorer:trigger_double_fire") then
        doubled = 1
        mod_rate = mod_rate + 1.5
    elseif (api:getAttachment("MUZZLE") == "ars_armorer:trigger_reckless_rounds") then
        mod_rate = mod_rate - 0.1
    end
    -- 返回计算结果
    return consume_ammo, mod_rate, doubled
end

-- 迫击炮特殊散布计算
local function mortarRandomSpread(radius)
    local u = math.random()
    local v = math.random()
    local theta = 2 * math.pi * u       -- 随机角度 [0, 2π)
    local r = radius * math.sqrt(v)     -- 随机半径 (通过开方确保均匀分布)
    local x = r * math.cos(theta)
    local y = r * math.sin(theta)
    return {x, y + 8}
end

-- 自定义散布
function M.calcSpread(api, num, spread)
    local param = api:getScriptParams()
    local ammo_count = getProjectileCount(param)
    local weapon_type = getWeaponType(param)
    if (ammo_count ~= 1) then
        -- 1 指迫击炮
        if (weapon_type == 1) then
            return mortarRandomSpread(spread)
        -- 0 是所有正常逻辑的武器
        elseif (weapon_type == 0) then
            -- 触发器：水平散布
            if (api:getAttachment("MUZZLE") == "ars_armorer:trigger_horizontal_spread") then
                if (ammo_count % 2 == 0) then
                    return {((num + 0.5 - ammo_count / 2 + random_offset()) / 1.5) / 2, random_offset() / 2}
                else
                    return {((num - (ammo_count - 1) / 2 + random_offset()) / 1.5) / 2, random_offset() / 2}
                end
            -- 触发器：竖直散布
            elseif (api:getAttachment("MUZZLE") == "ars_armorer:trigger_vertical_spread") then
                if (ammo_count % 2 == 0) then
                    return {random_offset() / 2, (((num + 0.5 - ammo_count / 2) / 2 + random_offset()) / 1.5) / 2}
                else
                    return {random_offset() / 2, (((num - (ammo_count - 1) / 2) / 2 + random_offset()) / 1.5) / 2}
                end
            end
        end
    end
end

-- 自定义射击
function M.shoot(api)
    -- 初始化计时器
    local cache = api:getCachedScriptData()
    if (cache == nil) then
        cache = {
            timer = 0,
            shooting = 0,
            double = 0,
            shoot = 0,
            shoot_timer = 0,
            remove = 0,
            remove_timer = 0,
            draw = 0
        }
    end
    local param = api:getScriptParams()
    local weapon_type = getWeaponType(param)

    -- 普通武器
    if (weapon_type == 0) then
        if (api:getAttachment("GRIP") ~= "tacz:empty") then
            local consume_ammo, mod_rate, doubled = countManaConsume(api)
            -- 计算本次开火最终需要消耗的魔力
            local consume_final = consume_ammo * (1 + mod_rate)
            -- 开火成功（魔力需求量大于魔力上限、有事件符、剩余魔力支撑得起本次射击）
            if (consume_final <= api:getMaxAmmoCount() and api:getAmmoAmount() >= consume_final) then
                cache.shoot = 1
                cache.shoot_timer = 0
                api:shootOnce(false)
                -- 特殊：双倍火力触发器额外射击一次
                if (doubled == 1) then
                    api:shootOnce(false)
                end
                -- 消耗魔力
                api:removeAmmoFromMagazine(consume_final)
            -- 开火失败
            else
                -- cache.shoot = 1
                -- cache.shoot_timer = 0
                -- 清空剩余魔力
                -- api:removeAmmoFromMagazine(api:getMaxAmmoCount())
            end
        end

    -- 特殊武器单独处理

    -- 1表示迫击炮
    elseif (weapon_type == 1) then
        local consume_ammo, mod_rate, doubled = countManaConsume(api)
        -- 计算本次开火最终需要消耗的魔力
        local consume_final = 200 * (1 + mod_rate)
        -- 开火成功（魔力需求量大于魔力上限、剩余魔力支撑得起本次射击）
        if (consume_final <= api:getMaxAmmoCount() and api:getAmmoAmount() >= consume_final) then
            cache.shoot = 1
            cache.shoot_timer = 0
            api:shootOnce(false)
            -- 消耗魔力
            api:removeAmmoFromMagazine(consume_final)
        -- 开火失败
        else
            -- cache.shoot = 1
            -- cache.shoot_timer = 0
            -- 清空剩余魔力
            -- api:removeAmmoFromMagazine(api:getMaxAmmoCount())
        end

    -- 3表示魔源飞刀
    elseif (weapon_type == 3) then
        -- 锁死射速为 120
        api:adjustShootInterval(500 - api:getShootInterval())
        -- 射击逻辑
        if (api:getAttachment("GRIP") ~= "tacz:empty") then
            cache.shoot = 1
            cache.shoot_timer = 0
            api:shootOnce(false)
            cache.remove = 1
            cache.remove_timer = 0
        end
    end

    -- 数据写回服务器
    api:cacheScriptData(cache)
end

-- 自定义每刻事件
function M.tick_heat(api, heatTimestamp)
    -- 初始化计时器
    local cache = api:getCachedScriptData()
    if (cache == nil) then
        cache = {
            timer = 0,
            shooting = 0,
            double = 0,
            shoot = 0,
            shoot_timer = 0,
            remove = 0,
            remove_timer = 0,
            draw = 0
        }
    end

    -- 充能相关的配件
    local param = api:getScriptParams();
    local mana_recharge_delay = getRechargeDelay(param)
    local mana_recharge_value = getRechargeValue(param)
    local weapon_type = getWeaponType(param)
    local recharge_delay_mod = 1
    local recharge_value_mod = 1

    -- 事件符
    if (api:getAttachment("GRIP") == "ars_armorer:spell_ignite") then
        recharge_delay_mod = recharge_delay_mod + 0.2
    elseif (api:getAttachment("GRIP") == "ars_armorer:spell_ignite_p") then
        recharge_delay_mod = recharge_delay_mod + 0.2
    end

    -- 修饰符
    if (api:getAttachment("STOCK") == "ars_armorer:mod_conflux_accelerator") then
        recharge_delay_mod = recharge_delay_mod - 0.34
        recharge_value_mod = recharge_value_mod + 0.5
    elseif (api:getAttachment("STOCK") == "ars_armorer:mod_rapid_regeneration") then
        recharge_value_mod = recharge_value_mod + 1
    elseif (api:getAttachment("STOCK") == "ars_armorer:mod_instant_renewal") then
        recharge_delay_mod = recharge_delay_mod - 0.7
    elseif (api:getAttachment("STOCK") == "ars_armorer:mod_proficient_utilization") then
        recharge_delay_mod = recharge_delay_mod - 0.4
        recharge_value_mod = recharge_value_mod + 0.5
    end

    -- 掏枪时给一次延迟
    if (cache.draw == 0) then
        cache.shoot = 1
        cache.shoot_timer = 0
        cache.draw = 1
    end

    -- 充能延迟
    if (cache.shoot == 1) then
        cache.shoot_timer = cache.shoot_timer + 1
        if (cache.shoot_timer >= mana_recharge_delay * recharge_delay_mod) then
            cache.shoot = 0
            cache.shoot_timer = 0
        end
    end

    -- 回复魔力逻辑
    if (weapon_type == 0) then
        if (cache.shoot == 0) then
            api:putAmmoInMagazine(mana_recharge_value * recharge_value_mod)
        end
    -- 迫击炮
    elseif (weapon_type == 1) then
        if (cache.shoot == 0) then
            api:putAmmoInMagazine(mana_recharge_value * recharge_value_mod)
        end
    -- 飞刀
    elseif (weapon_type == 3) then
        cache.timer = (cache.timer + 1) % 20
        if (cache.remove == 1) then
            cache.remove_timer = cache.remove_timer + 1
            if (cache.remove_timer == 1) then
                api:removeAmmoFromMagazine(1)
                cache.remove = 0
                cache.remove_timer = 0
            end
        elseif (cache.shoot == 0 and cache.timer % 20 == 0) then
            api:putAmmoInMagazine(1)
        end
    end

    -- 数据写回服务器
    api:cacheScriptData(cache)
end

function M.start_reload(api)
    -- 禁用换弹逻辑
    return false
end

return M