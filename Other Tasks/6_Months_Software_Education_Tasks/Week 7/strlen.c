// Online C compiler to run C program online
#include <stdio.h>
#include <string.h>

int main() {
    // Write C code here
    char letters[30];
    printf("Enter a character, word or sentence:");
    scanf("%s",letters);
    printf("Length of the input is:%d",strlen(letters));

    return 0;
}