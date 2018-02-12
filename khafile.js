let project = new Project('BulletTest');
project.addAssets('Assets/**');
project.addSources('Sources');
project.addLibrary('Bullet');
resolve(project);
