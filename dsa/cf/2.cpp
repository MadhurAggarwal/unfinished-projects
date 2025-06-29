#include <iostream>
using namespace std;

int main(){
    int t;
    cin >> t;
    for (int z = 0; z<t; z++){
        string s; 
        cin>>s;
        int n = s.length();
        int open = 0;
        int close = 0;
        bool ans = false;
        for(int i=0;i<n-1;i++){
            if(s[i] == '('){
                open++;
            }
            else{
                close++;
            }
            if(open==close) ans = true;
        }
        if (ans){
            cout << "YES" << endl;
        } else {
            cout << "NO" << endl;
        }
    }
    return 0;
}