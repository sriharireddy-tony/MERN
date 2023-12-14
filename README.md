---> CI/CD Pipeline

   1.craete EC2 Instance by using ubuntu image
   2.install jenkins and configure jenkins on ubuntu
   3.install node and npm
   4.install docker on ubuntu
   5.use github for repository
   6.craete CI/CD pipeline
   
  Steps for creating pipeline:-
 
  
  -> First open AWS and search for EC2 and create a new instance by giving name and OS selection after that select or create key pair for pipeline and there select .ppk and click on create key pair after that in networking settings select and https and last click on launch instance
  
  -> after that click that EC2 instance there ip4 address there then copy that and go to google install putty and open the putty there paste the ip address and after that select left side SSH select and select Auth and select credentils praivate key file browse file whatever you downloaded .ppk file and click on open and accept
  
  -> after that one commond prompt will open there type ubuntu becase of ubuntu is a default username 
  
  -> after that seach in google for like download jenkins for  ubuntu after that there under the download tab click on ubuntu/debian there two commond will come apply those two commonds with sudo word in putty terminal there enter 3 commonds run that will configre and install jenkins
  
  -> every time update terminal with this commond after install anything (sudo apt-get update) and install node and npm and docker also (sudo apt-get install node.js and sudo apt-get install npm ) there check versions also (node -v and npm -v) and also you should check whether jenkin server running or not (systemctl status jenkins)
  
  -> after that in EC2 instance check whether port number saved or not if saved open in browser with ip address and port number
  
  ->  after it opened in browser there one path will appear enter this cmd in ubuntu prompt like ( sudo cat /var/lib/jenkins/secrets/initialAdminPassword) after that it will give password enter that password into browser and click submit
  
  -> after that that will ask are you install suggested plugins or manually install like that you can select suggested ,after that fill form with username and password then jenkins dashboard will open.
  
  -> after that copy the git SSH url and go to the jenkin dashboard click on add item and give name and click on free style project and click ok and after that will ask git details like url and branch give details.
  
  -> after that goto ubuntu terminal we need to generate key for that we use commong(ssh-keygen) after that click on enter and enter and that will give image , after if you enter ls commond that wiil give path where key is stored and if you eneter cat that path like (cat sshkey.pub) if click eneter that will generate key, copy the key and go to github setting add that in SSH key tab and save 
  
  -> after that goto ubuntu terminal eneter like (cat sshkey) one secret will generate and that key paste the jenkins dashboard under the git tab
