#include<iostream>
using namespace std;

bool canJump(vector<int>& nums){
		int N = nums.size();
        int recentTrue = N-1; // recent index which can reach the last index 
        for (auto i=N-1; i>=0; i--) {
            if (recentTrue - i <= nums[i]) { // update the recentTrue whenever there is smaller reachable index
                recentTrue = i;
            }
        }
        if (recentTrue == 0) return true;
        else return false;

}

int main(){


	return 0;
}