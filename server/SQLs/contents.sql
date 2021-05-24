drop table if exists contents;
create table contents
(
    id         int      NOT NULL primary key identity,
    created_at datetime NOT NULL default current_timestamp,
    user_id    int      NOT NULL index user_id,
    title      nvarchar(255) unique,
    library_id int,
    parameters nvarchar(max)
);
