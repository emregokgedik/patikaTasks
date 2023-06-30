#include <stdio.h>
#include <stdbool.h>
#include <string.h>

const char* isPolindrom(char* word_isPolindrom) {
    int i;
    int size=strlen(word_isPolindrom);
    char temp;
    int flag=1;
    for (i = 0; i < size/2; i++) {
        if(word_isPolindrom[i]==word_isPolindrom[size-1-i]){
        }else{
            flag=0;
        }
}
if(flag){
    printf("polindrom");
}else{
printf("polindrom değil");
}
}

int main()
{   
    char word_isPolindrom[20];
    
    printf("Enter your word to check if is polindrom: ");
    scanf("%s", word_isPolindrom);
    isPolindrom(word_isPolindrom);



    
    return 0;
}