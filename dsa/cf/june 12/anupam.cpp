#include <iostream>
#include <vector>

using namespace std;

int solve(int n, int m, vector<vector<int> > &v){
    vector<vector<int> > aux(n, vector<int>(m, 0));
    int ans = 0;
    for(int i=0;i<n-1;i++){
        for(int j=1;j<m;j++){
            if(v[i][j-1]==0 && v[i][j]==1) aux[i][j] = 1;
            else if(v[i][j-1]==1 && v[i][j]==1) aux[i][j] = aux[i][j-1] + 1;
            else aux[i][j] = 0;
        }
    }
    for(int j=1;j<m;j++){
        int count = 0;
        for(int i=0;i<n;i++){
            if(v[i][j]==0) count = 0;
            else{
                count++;
                if(count>=3 && count%2==1){
                    int x = i-count+1;
                    int y = j+(count-1)/2;
                    if(x>=0 && y<m && aux[x][y]>=count){
                        ans = max(ans, count);
                    }
                }
            } 
        }
    }
    return ans;
}

int main(){
    vector<vector<int> > v{
        {0, 1, 1, 0, 1},
        {1, 1, 0, 1, 0},
        {0, 1, 1, 1, 1},
        {1, 0, 0, 1, 0}
    };
    cout<<solve(v.size(), v[0].size(), v) << endl;
    return 0;
}