drop table if exists files;
create table files
(
    id         int          not null primary key identity,
    user_id    int          not null index user_id,
    content_id int index content_id,
    type       varchar(50),
    path       varchar(255) not null index file_path,
    created_at datetime     not null,
    is_draft   bit default 1 index is_draft
);

