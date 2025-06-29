#include <iostream>
using namespace std;

class trie{

    int traverse(int x){
        int total = 0;
        for(int i=0; i<32; i++){
            int bit = (x & (1 << i));
            if(bit == 1) temp = temp->zero;
            else{
                total += temp->zero->count;
                temp = temp->one;
            }
        }
    }
}

int solve(int a, int b){
    for(int i=a; i<=b; i++){
        vector<int> v;
        for(int j=0; j<32; j++){
            int bit = (i & (1 << j));
            if(bit == 0) v.push_back(j);
        }
        // count numbers between a and b
        // with any of the v[x] positions as 1, rest 0
    }
}

101010111
00


int main(){
    
}