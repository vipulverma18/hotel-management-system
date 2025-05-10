import { bootstrap } from '@hotels/common';
import { AppModule } from './app.module';

async function bootstrapReservations() {
  await bootstrap(AppModule, 'reservations', 3002);
}
bootstrapReservations();
