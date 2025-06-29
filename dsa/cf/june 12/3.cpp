#include <iostream>
#include <vector>
using namespace std;

int main(){
    int t; cin>>t;

    while(t--){
        int n; long long k;
        cin >> n >> k;
        vector<long long> v;
        for(int i=0;i<n;i++){
            long long x;
            cin >> x;
            v.push_back(x);
        }
        
        int ans = 0;
        for(int x=0; x<63; x++){
            long long num = 1LL<<x;
            for(int i=0; i<n; i++){
                if(v[i] & num) {
                    ans++;
                } else if(k >= num) {
                    ans++;
                    k -= num;
                }
            }
        }
        cout<<ans<<endl;
    }
    return 0;
}