import React, { FC, useState } from 'react';
import { IUserModel } from "../../models/User";
import { getUserPosts } from "../../services/posts.api.service";
import { IPostModel } from "../../models/Post";

interface UserProps extends IUserModel {}

const User: FC<UserProps> = ({ id, firstName, lastName, maidenName, age, gender, email, image }) => {
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleLoadPosts = async () => {
        setLoading(true);
        try {
            const userPosts = await getUserPosts(id);
            setPosts(userPosts);
        } catch (error) {
            console.error('Error loading user posts:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h4>{firstName} {lastName} {maidenName}</h4>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Email: {email}</p>
            <img src={image} alt={firstName} style={{ width: '200px' }} />
            <div>
                <button onClick={handleLoadPosts} disabled={loading}>
                    Open {firstName}'s posts
                </button>
            </div>
            <div>
                {posts.map(post => (
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default User;
