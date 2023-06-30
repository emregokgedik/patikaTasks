#include <stdio.h>
#include <string.h>

void ReverseText(char* word_toReverse) {
  int i;    
    int size=strlen(word_toReverse);
    char temp;
    for (i = 0; i < size/2; i++) {
        temp=word_toReverse[i];
        word_toReverse[i]=word_toReverse[size-1-i];
        word_toReverse[size-1-i]=temp;
}
}

int main()
{   
    char word_toReverse[20];
    
    printf("Enter word you want to reverse: ");
    scanf("%s", word_toReverse);
    ReverseText(word_toReverse);

printf("%s",word_toReverse);

    
    return 0;
}