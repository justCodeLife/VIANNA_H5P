drop table if exists users;
create table users
(
    id       int         not null primary key identity,
    name     varchar(50) not null,
    username varchar(50) not null,
    password varchar(50) not null,
    role     bit     not null default 1,
    index auth (username, password),
    index role (role)
);

insert into users (name, username, password, role)
values ('superadmin', 'admin', '123456', 0)