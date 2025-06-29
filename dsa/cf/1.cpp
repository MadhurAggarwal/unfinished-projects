#include <iostream>
#include <unordered_map>

using namespace std;

int main(){
    int t;
    cin >> t;
    for(int i=0; i<t; i++){
        int n; cin>>n;

        vector<int> v(n);
        for(int j = 0; j<n; j++){
            cin>>v[j];
        }
        sort(v.begin(), v.end());
        int x = 0;
        while(x<n && v[x]%2!=v[n-1]%2) x++;
        int y = 0;
        while(y<n && v[y]%2!=v[0]%2) y++;
        cout<<min(x,y)<<endl;
    }
    return 0;
}