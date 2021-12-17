[client]
port = 3306
default-character-set=utf8


[mysqld]
#bind-address = 127.0.0.1
bind-address = 0.0.0.0
key_buffer_size = 512M
innodb_buffer_pool_size = 512M
init_connect="SET collation_connection=utf8_general_ci"
character-set-server = utf8
collation-server = utf8_unicode_ci

[mysql]
default-character-set=utf8
