# do "python3 convertimage.py {folder-name} 80"
# sys-argv 1 -> folder-name
# sys-argv-2 -> quality of produced .webp images [0-100]

import sys
from subprocess import call
from glob import glob

path = sys.argv[1]
quality = sys.argv[2]

if int(quality) < 0 or int(quality) > 100:
    print("image quality out of range[0-100] ;/:/")
    sys.exit(0)

img_list = []
for img_name in glob(path+'/*'):
    if img_name.endswith(".jpg") or img_name.endswith(".png") or img_name.endswith(".jpeg"):
        img_list.append(img_name.split('/')[-1])

output_dir = path+'-to-webp'
create_output_dir = 'mkdir -p {}'.format(output_dir)
call(create_output_dir, shell=True)

for img_name in img_list:
    cmd= 'cwebp '+path+'/'+img_name+' -q '+quality+' -o '+output_dir+'/'+(img_name.split('.')[0])+'.webp'
    call(cmd, shell=True)  
    # print(cmd)