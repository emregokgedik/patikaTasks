
#include <stdio.h>

int recursiveFactorial(int n){
    if(n>0)
        return n*recursiveFactorial(n-1);
    return 1;
}

int main() {
    printf("Enter number to count factorial:");
    int num;
    scanf("%d",&num);
    printf("%d",recursiveFactorial(num));
    return 0;
}