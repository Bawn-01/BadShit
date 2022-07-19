-- au yup

local function writeJSON(inp)
    local fiel = io.open("file.json", "w")
    fiel:write('{"input":"' .. inp .. '", "file": "stdin"}')
    fiel:close()
end


local qinput = io.read()
writeJSON(qinput)


