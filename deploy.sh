# switch to temp folder
cd /home/tempfolder/codepiefe

# beaucuse we doesn't need build image in server, so doesn't need "--build"
sudo docker-compose up --force-recreate -d >>/dev/null 2>&1
if [[ $? != 0 ]]; then
  exit 0
fi

# delete temp file
rm docker-compose.yml