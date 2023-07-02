#include <stdio.h>

int main() {
    FILE *fptr;
    int num=2023;
    fptr=fopen("C:\\Users\\Emre\\Desktop\\newprogram.txt","w");
    fprintf(fptr,"%d",num);
    fscanf(fptr,"%d", &num);
       printf("Value of n=%d", num);
    fclose(fptr);


}