#include <iostream>
#include <vector>
using namespace std;

int main(){
    int t; cin>>t;
    for(int z=0;z<t;z++){
        int n; cin>>n;
        vector<int> height(n);
        for(int i=0; i<n; i++){
            cin>>height[i];
        }
        vector<vector<int>> obstacle(n, vector<int>(2, 0));
        bool possible = true;
        for(int i=0; i<n; i++){
            for(int j=0; j<2; j++){
                cin>>obstacle[i][j];
            }
        }

        int one = 0;
        int zero = 0;
        int minus1 = 0;

        vector<pair<int,int>> possibleOnes(n,{0,0}); 

        for(int i=0; i<n; i++){
            if(height[i]==-1) minus1++;
            else if(height[i]==0) zero++;
            else one++;


        }
        
    }
    return 0;
}