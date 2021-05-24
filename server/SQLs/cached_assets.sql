drop table if exists cached_assets
create table cached_assets 
(
    cached_id   int          not null,
    cached_type varchar(200) not null,
    path        varchar(200) not null,
    index cached_assets_index (cached_id, cached_type)
);
