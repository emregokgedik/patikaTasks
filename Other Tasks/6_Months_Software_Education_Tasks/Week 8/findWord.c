#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

#define ALPHABET_SIZE 26

struct TrieNode {
    bool isEndOfWord;
    struct TrieNode* children[ALPHABET_SIZE];
};

struct TrieNode* createNode() {
    struct TrieNode* node = (struct TrieNode*)malloc(sizeof(struct TrieNode));
    node->isEndOfWord = false;
    for (int i = 0; i < ALPHABET_SIZE; i++) {
        node->children[i] = NULL;
    }
    return node;
}

void insert(struct TrieNode* root, const char* key) {
    struct TrieNode* current = root;

    for (int i = 0; i < strlen(key); i++) {
        int index = key[i] - 'a';
        if (current->children[index] == NULL) {
            current->children[index] = createNode();
        }
        current = current->children[index];
    }

    current->isEndOfWord = true;
}

bool search(struct TrieNode* root, const char* key) {
    struct TrieNode* current = root;

    for (int i = 0; i < strlen(key); i++) {
        int index = key[i] - 'a';
        if (current->children[index] == NULL) {
            return false;
        }
        current = current->children[index];
    }

    return (current != NULL && current->isEndOfWord);
}

void printWordsWithPrefix(struct TrieNode* root, const char* prefix) {
    struct TrieNode* current = root;

    for (int i = 0; i < strlen(prefix); i++) {
        int index = prefix[i] - 'a';
        if (current->children[index] == NULL) {
            return;
        }
        current = current->children[index];
    }

    printWords(current, (char*)prefix);
}

void printWords(struct TrieNode* root, char prefix[]) {
    if (root == NULL) {
        return;
    }

    if (root->isEndOfWord) {
        printf("%s\n", prefix);
    }

    for (int i = 0; i < ALPHABET_SIZE; i++) {
        if (root->children[i] != NULL) {
            char* newPrefix = (char*)malloc(sizeof(char) * (strlen(prefix) + 2));
            strcpy(newPrefix, prefix);
            newPrefix[strlen(prefix)] = ('a' + i);
            newPrefix[strlen(prefix) + 1] = '\0';

            printWords(root->children[i], newPrefix);

            free(newPrefix);
        }
    }
}

int main() {
    struct TrieNode* root = createNode();

    const char* words[] = {"apple", "application", "banana", "art", "ball", "cat"};
    int size = sizeof(words) / sizeof(words[0]);

    for (int i = 0; i < size; i++) {
        insert(root, words[i]);
    }

    const char* prefix = "app";
    printf("Kelime listesinde '%s' ile başlayan kelimeler:\n", prefix);
    printWordsWithPrefix(root, prefix);

    return 0;
}
