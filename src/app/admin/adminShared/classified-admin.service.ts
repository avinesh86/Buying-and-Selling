import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Classified } from './classified';

@Injectable()

export class ClassifiedAdminService {

    createClassified(classified: Classified){
        let storageRef = firebase.storage().ref();
        storageRef.child(`images/${classified.imgTitle}`).putString(classified.img, 'base64')
            .then((snapshot) => { 
                let url = snapshot.metadata.downloadURLs[0];
                let dbRef = firebase.database().ref('classifiedPosts/');
                let newPost = dbRef.push();
                newPost.set ({
                    title: classified.title,
                    content: classified.content,
                    imgTitle: classified.imgTitle,
                    img: url,
                    id: newPost.key
                });         
            })
            .catch ((error)=>{
                alert(`failed upload: ${error}`);
            });            
    }

    editPost(update: Classified){
        let dbRef = firebase.database().ref('classifiedPosts/').child(update.id)
            .update({
                title: update.title,
                content: update.content
            });
        alert('classified updated');
    }

    removePost(deletePost: Classified){
        let dbRef = firebase.database().ref('classifiedPosts/').child(deletePost.id).remove();
        alert('post deleted');
        let imageRef = firebase.storage().ref().child(`images/${deletePost.imgTitle}`)
            .delete()
                .then(function() {
                    alert(`${deletePost.imgTitle} was deleted from Storage`);
                }).catch(function(error) {
                    alert(`Error - Unable to delete ${deletePost.imgTitle}`);
                });
    }


}