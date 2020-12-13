#include<bits/stdc++.h>
using namespace std;



class Avl_tree{
private:
  struct node{
    int data = 0;
    node *left,*right,*previous;
    node(int data){
      this->data = data;
      left = right = previous = nullptr;
    }
  };
  struct node *root = nullptr;

  void inOrder(node *root){
    if(root==NULL){
        return;
    }
    cout<<root->data<<" ";
    inOrder(root->left);
    inOrder(root->right);
  }
public:
  Avl_tree(){}
  Avl_tree(int data){
    root = new node(data);
  }

  void insert(int data){
    if(root==nullptr){
      root = new node(data);
    }
    queue<node *> q;
    q.push(root);
    while(!q.empty()){
      node *temp = q.front();
      q.pop();
      if(temp->left!=nullptr && temp->data > data){
        temp->left = new node(data);
        temp->left->previous = temp;
        if(temp->previous->left==nullptr){
          if(temp->right==nullptr){
            node *parent = temp->previous->previous;
            node *child = temp->left;
            temp->left->right = temp;
            temp->left = nullptr;
            temp->left->previous = temp->previous;
            temp->previous->right = temp->left;
            child->left = child->previous;
            if(child->previous->previous->right==child->previous){
              child->previous->previous->right = child;
            }else{
              child->previous->previous->left = child;
            }
          }else if(temp->previous->right==nullptr){
            temp->left = temp->previous;
            if(temp->previous->previous->right==temp->previous){
              temp->previous->previous->right = temp;
            }else{
              temp->previous->previous->left = temp;
            }
          }
        }
        break;
      }else{
        q.push(temp->left);
      }
      if(temp->right != nullptr && temp->data < data){
          temp->right = new node(data);
          temp->right->previous = temp;
          if(temp->previous->right ==nullptr){
            if(temp->right==nullptr){
              temp->right = temp->previous;
              if(temp->previous->previous->left==temp->previous){
                temp->previous->previous->left = temp;
              }else{
                temp->previous->previous->right = temp;
              }
          }else if(temp->previous->left==nullptr){
              if(temp->left!=nullptr){
                break;
              }
              node *parent = temp->previous->previous;
              node *child = temp->right;
              temp->right->left = temp;
              temp->right = nullptr;
              temp->right->previous = temp->previous;
              temp->previous->left = temp->right;
              child->right = temp->previous;
              if(child->previous->previous->left==child->previous){
                child->previous->previous->left = child;
              }else{
                child->previous->previous->right = child;
              }
          }
        }
        break;
      }else{
        q.push(temp->right);
      }
    } //here the while loop is finished
  }

  void travers(){
    inOrder(root);
  }
};

int main(){
  Avl_tree t;
  t.insert(78);
  t.insert(8);
  t.insert(748);
  t.insert(7);
  t.travers();

  return 0;
 }
