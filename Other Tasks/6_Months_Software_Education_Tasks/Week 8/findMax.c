#include <stdio.h>

int maxValueOfArray(int num_array[], int n) {
   int max_value = num_array[0]; 
   for (int i = 0; i < n; i++) {
      if (num_array[i] > max_value) {
         max_value = num_array[i];
      }
   }

   return max_value;
}

int main() {
   int num_array[] = {0,3,5,10,9}; 
   int n = sizeof(num_array) / sizeof(num_array[0]);
   int maxNumber = maxValueOfArray(num_array, n); 

   printf("Max Value of Array is: %d\n", maxNumber);

   return 0;
}
