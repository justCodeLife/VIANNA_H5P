drop table if exists results;
create table results
(
    id         int not null primary key identity (1,1),
    content_id int not null,
    user_id    int not null,
    score      int not null,
    max_score  int not null,
    opened     int not null,
    finished   int not null,
    time       int not null,
    index content_user (content_id, user_id)
);
