CREATE TABLE users (
    userId INT IDENTITY(1,1) PRIMARY KEY,
    lastName NVARCHAR(50) NOT NULL,
    firstName NVARCHAR(50) NOT NULL,
    username NVARCHAR(50) UNIQUE NOT NULL,
    pwd NVARCHAR(550) UNIQUE NOT NULL
)

CREATE TABLE posts (
    postId INT IDENTITY(1,1) PRIMARY KEY,
    postAuthorId INT,
    postContent TEXT,
    datePost DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (postAuthorId) REFERENCES users(userId)
)

CREATE TABLE comments (
    commentId INT IDENTITY(1,1) PRIMARY KEY,
    postId INT,
    commentAuthorId INT,
    commentContent TEXT,
    dateComment DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (postId) REFERENCES posts(postId)

)

CREATE TABLE follows (
    followerId INT,
    followedUserId INT,
    PRIMARY KEY (followerID, followedUserID),
    FOREIGN KEY (followerID) REFERENCES users(userID),
    FOREIGN KEY (followedUserID) REFERENCES users(userID)
)