import { AppModule } from './app.module';
import { bootstrap } from '@hotels/common';

bootstrap(AppModule, 'hotels', 3001).then((r) => console.log(r));
