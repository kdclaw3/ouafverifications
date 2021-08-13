# ouafverifications
Project written to run a large amount of verification and key integrity queries against Oracle Database SQL Rest. 

# application
Queries for this project were written specifically to verificy an Oracle WAM 1.9 to Oracle WACS data conversion. This projct could be extended to CC&B, ODM, MWM, MDM, and other OUAF and Oracle Utilities Cloud Service applications.

# to use this project
To use this project create an environment (.env) file with the two parameters below:
```
#.env
OUAF_SQLREST_URL=The url to your SQL Rest Connection
OUAF_SQLREST_AUTHORIZATION=Basic Authentication String
```