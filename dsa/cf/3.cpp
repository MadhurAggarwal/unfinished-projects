#include <iostream>
using namespace std;

int main(){
    int t; cin>>t;
    for(int z=0;z<t;z++ ){
        int n; cin>>n;
        vector<int> d(n);
        for(int i=0; i<n; i++){
            cin>>d[i];
        }
        vector<vector<int>> obs(n, vector<int>(2, 0));
        bool possible = true;
        for(int i=0; i<n; i++){
            for(int j=0; j<2; j++){
                cin>>obs[i][j];
            }
        }
        if(obs[0][0]>1) possible = false;
        if(obs[0][1]<0) possible = false;

        for(int i=1; i<n; i++){
            if(obs[i][0] > obs[i-1][1] + 1) possible = false;
            obs[i][0] = max(obs[i][0], obs[i-1][0]);

            if(obs[i][1] < obs[i-1][0]) possible = false;
            obs[i][1] = min(obs[i][1], obs[i-1][1]+1);

            if(obs[i][0] > obs[i][1]) possible = false;
        }

        if (!possible){
            cout << -1 << endl;
            continue;
        }

        int minus1 = 0;
        int one = 0;
        for(int i=0; i<n; i++){
            if(d[i] == -1){
                minus1++;
            } else if(d[i] == 1){
                one++;
            }

            int 
        }
    }
    return 0;
}