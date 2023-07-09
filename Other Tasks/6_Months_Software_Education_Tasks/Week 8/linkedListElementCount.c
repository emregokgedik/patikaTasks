#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

int countElements(struct Node* head) {
    int count = 0;
    struct Node* current = head;

    while (current != NULL) {
        count++;
        current = current->next;
    }

    return count;
}

int main() {
    // Bağlı liste örneği oluşturma
    struct Node* head = (struct Node*)malloc(sizeof(struct Node));
    struct Node* second = (struct Node*)malloc(sizeof(struct Node));
    struct Node* third = (struct Node*)malloc(sizeof(struct Node));

    head->data = 1;
    head->next = second;

    second->data = 2;
    second->next = third;

    third->data = 3;
    third->next = NULL;

    // Eleman sayısını hesaplama ve ekrana yazdırma
    int elementCount = countElements(head);
    printf("Bağlı listedeki eleman sayısı: %d\n", elementCount);

    // Bellekten bağlı listeyi temizleme
    free(head);
    free(second);
    free(third);

    return 0;
}
