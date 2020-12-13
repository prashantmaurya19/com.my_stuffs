#include<iostream>
#include<fstream>

using namespace std;

int main(){
  ofstream file("style.txt",ios::app); //ofstream class helps to write data in file
  string data;
  while(true){
    getline(cin,data);
    data += "\n";
    if(data=="over\n"){
      break;
    }
    cout<<data;
    file<<data;
  }
  file.close();
  cout<<"write operation is done successfully!"<<endl;
  ifstream fil("style.txt");
  auto cinbuf = std::cin.rdbuf(fil.rdbuf()); // this line is used for redireting the cin to file
  while(cin>>data){
    cout<<data<<endl;
  }
  fil.close();
   return 0;
 }
