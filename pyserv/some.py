dic = {
    'some': 'hellol',
    'notsome': 'byebye'
}
parse = dic.items()

def recursive(parse,it=len(parse)-1):
    if (it < 0):
        return
    print(parse[it])
    recursive(parse,it-1)

recursive(list(parse))
