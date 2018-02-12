let project = new Project('BulletTest');
project.addAssets('Assets/**');
project.addAssets('Libraries/Bullet/js/ammo/ammo.js');
project.addSources('Sources');
project.addLibrary('Bullet');
resolve(project);
