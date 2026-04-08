local M = {}

-- math.randomseed(tonumber(tostring(os.time()):reverse():sub(1, 6)))

local function getRechargeDelay(param)
    local mana_recharge_delay = param.mana_recharge_delay
    if (mana_recharge_delay == nil) then return nil end
    return mana_recharge_delay
end

local function getRechargeValue(param)
    local mana_recharge_value = param.mana_recharge_value
    if (mana_recharge_value == nil) then return nil end
    return mana_recharge_value
end

function M.shoot(api)
    -- 初始化计时器
    local cache = api:getCachedScriptData()
    if (cache == nil) then
        cache = {
            timer = 0,
            shooting = 0,
            double = 0,
            shoot = 0,
            shoot_timer = 0
        }
    end
    -- 开火逻辑
    cache.shoot = 1
    cache.shoot_timer = 0
    api:shootOnce(false)
    api:removeAmmoFromMagazine(20)
    -- 数据写回服务器
    api:cacheScriptData(cache)
end

function M.tick_heat(api, heatTimestamp)
    -- 初始化计时器
    local cache = api:getCachedScriptData()
    if (cache == nil) then
        cache = {
            timer = 0,
            shooting = 0,
            double = 0,
            shoot = 0,
            shoot_timer = 0
        }
    end
    -- 充能相关的配件
    local param = api:getScriptParams();
    local mana_recharge_delay = getRechargeDelay(param)
    local mana_recharge_value = getRechargeValue(param)
    -- 充能延迟
    if (cache.shoot == 1) then
        cache.shoot_timer = cache.shoot_timer + 1
        if (cache.shoot_timer >= mana_recharge_delay) then
            cache.shoot = 0
            cache.shoot_timer = 0
        end
    end
    -- 回复魔力逻辑
    cache.timer = cache.timer + 1
    if (cache.shoot == 0) then
        api:putAmmoInMagazine(mana_recharge_value)
    end
    cache.timer = cache.timer % 10
    -- 数据写回服务器
    api:cacheScriptData(cache)
end

function M.start_reload(api)
    return false
end

return M