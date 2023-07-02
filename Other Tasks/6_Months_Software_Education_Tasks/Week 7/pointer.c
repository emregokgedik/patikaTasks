#include <stdio.h>

int main() {
    int* pa;
    int* pb;
    int a;
    int b;
    pa=&a;
    pb=&b;
    *pa=3;
    *pb=5;
    printf("a:%d b:%d", a,b);
}