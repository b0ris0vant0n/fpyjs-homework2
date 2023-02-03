from datetime import datetime


def simplenumber(n):
    time_start = datetime.now()
    list_simple_number = []
    i = 2
    while len(list_simple_number) < n:

        flag = False
        counter = 0

        for counter in list_simple_number:
            if i % counter == 0 and i / counter != 1:
                flag = True
                break
        if flag == False:
            list_simple_number.append(i)
        i += 1
    print(datetime.now() - time_start)
    return list_simple_number


if __name__ == '__main__':
    print(simplenumber(int(input('Введите число: '))))


