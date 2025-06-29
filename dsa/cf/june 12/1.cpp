#include <iostream>
using namespace std;

int main(){
    int t; cin >> t;
    for(int i=0;i<t; i++){
        int n; int k;
        cin>> n >> k;
        string s(k, '1');
        if(k<n){
            s += string(n-k, '0');
        }
        cout<<s<<endl;
    }
    return 0;
}