#include <stdio.h>

#define MAX_SIZE 100

void findDuplicates(int arr[], int size) {
    int hash[MAX_SIZE] = {0}; // Hash tablosu

    printf("Tekrar eden elemanlar: ");

    for (int i = 0; i < size; i++) {
        hash[arr[i]]++; // Dizi elemanlarını hash tablosunda takip etme
        if (hash[arr[i]] == 2) {
            printf("%d ", arr[i]); // Tekrar eden elemanları ekrana yazdırma
        }
    }

    printf("\n");
}

int main() {
    int arr[] = {1, 2, 3, 4, 2, 5, 6, 7, 8, 1, 9, 10, 5};
    int size = sizeof(arr) / sizeof(arr[0]);

    findDuplicates(arr, size);

    return 0;
}
