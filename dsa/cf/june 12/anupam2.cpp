#include <iostream>
using namespace std;

bool canWePlace(vector<int> &stalls, int dist, int cows) {
    int n = stalls.size();
    int cntCows = 1;
    int last = stalls[0];
    for (int i = 1; i < n; i++) {
        if (stalls[i] - last >= dist) {
            cntCows++;
            last = stalls[i];
        }
        if (cntCows >= cows) return true;
    }
    return false;
}
int aggressiveCows(vector<int> &stalls, int k) {
    int n = stalls.size();
    sort(stalls.begin(), stalls.end());

    int low = 1, high = stalls[n - 1] - stalls[0];
    while (low <= high) {
        int mid = (low + high) / 2;
        if (canWePlace(stalls, mid, k) == true) {
            low = mid + 1;
        }
        else high = mid - 1;
    }
    return high;
}

int solve(string s, int k){
    int n = s.length();
    vector<int> v;
    int count = 0;
    for(int i=0; i<n; i++){
        if(s[i]=' ' || s[i]=='-'){
            if(count>0){
                v.push_back(count);
                count = 0;
            }
        }
    }
    return aggressiveCows(v,k);
}

int main(){
    string s=" ";
    cout<<solve(s,1)<<endl;
    return 0;
}

