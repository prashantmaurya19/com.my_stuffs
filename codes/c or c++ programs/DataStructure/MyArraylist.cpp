#include <iostream>
using namespace std;

template<class T>
class MyArraylist{
	private:
		int length = 0;
		T *arr;
		T *temp = arr;
		void replicate(T *a,T *t){
			a = new T[length];
			for(int i = 0;i<length;i++){
				a[i] = t[i];
			}
		}

	public:
		MyArraylist(){
			arr = new T[0];
		}
		MyArraylist(T value){
			arr = new T[0];
			length++;
			arr[length] = value;
		}
		void add(T value){
			replicate(arr,temp);
			length++;
		}
		void print(){
			cout<<"[";
			for (int i = 0; i < length; i++)
			{
				if(i==length-1){
					cout<<" "<<arr[i]<<"]"<<endl;
					break;
				}
				cout<<" "<<arr[i]<<",";
			}
		}
		void addAt(T value,int index){
			// length++;
			// replicate(arr,temp);
			// for (int i = index; i <= length; i++)
			// {
			// 	T temp = arr[i];
			// 	arr[i] = arr[i];
			// 	arr[i] = temp;
			// }
			arr[index-1] = value;
			cout<<length<<endl;
		}

};

int main(){
	// MyArraylist<int> prashant;
	// for (int i = 0; i < 13; i++)
	// {
	// 	prashant.add(i);
	// }
	// prashant.print();
	int *arr =new int[0];
	arr[0] = 789;
	cout<<arr[1]<<endl;
	return 0;
}
