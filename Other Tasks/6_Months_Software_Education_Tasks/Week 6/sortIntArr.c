// Online C compiler to run C program online
#include <stdio.h>

void SortIntArr(int array_size){
    int number[array_size];
        int temp;
    for(int i=0;i<array_size;i++){
        printf("enter %d. element's value:",i+1);
        scanf("%d",&number[i]);
        for(int j=0;j<i;j++){
            if(number[j]>number[i])
            {
                temp=number[j];
                number[j]=number[i];
                number[i]=temp;
                break;
            }
        }
        }

    for(int i=0;i<array_size;i++){
        printf("%d",number[i]);
    }
}

int main() {
    // Write C code here
    int array_size;
    printf("enter size of array you want to sort:");
    scanf("%d",&array_size);
    SortIntArr(array_size);

    return 0;
}