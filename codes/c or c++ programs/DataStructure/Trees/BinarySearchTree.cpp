#include<iostream>
#include<queue>
#include "utility.h"
using namespace std;

template<class T>
class BinarySearchTree{
    private:
        int size= 0;
        node<T> *root = NULL;
        void inorder(node<T>* node){
            if(node==nullptr){
                return;
            }
            inorder(node->left);
            cout<<node->data<<" ";
            inorder(node->right);
        }
    public:
        BinarySearchTree(){

        }
        BinarySearchTree(T a){
            root = new node<T>(a);
        }
        void insert(T data){
            if(this->root==nullptr){
                root = new node<T>(data);
                return;
            }
            queue<node<T>*> q;
            q.push(this->root);
            while(!q.empty()){
                node<T> * temp = q.front();
                q.pop();
                if(!temp->left && temp->data>data){
                    temp->left = new node<T>(data);
                    break;
                }else{
                    q.push(temp->left);
                }
                if(!temp->right && temp->data<data){
                    temp->left = new node<T>(data);
                    break;
                }else{
                    q.push(temp->right);
                }
            }
        }
        void travers(){
            inorder(this->root);
        }
};


int main(){

     BinarySearchTree<int> t;
	 t.insert(832);
     t.insert(32);
     t.insert(2);
	 t.insert(321);
     t.insert(302);
     t.insert(326);
     t.travers();

    return 0;
}
