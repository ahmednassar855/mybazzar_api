import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { BrandsModule } from './brands/brands.module';
import { ProductTypesModule } from './product-types/product-types.module';
import { ProductVariantsModule } from './product-variants/product-variants.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { AddressesModule } from './addresses/addresses.module';
import { StocksModule } from './stocks/stocks.module';

@Module({
  
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    ProductsModule,
    BrandsModule,
    ProductTypesModule,
    ProductVariantsModule,
    CategoriesModule,
    OrdersModule,
    PaymentsModule,
    AddressesModule,
    StocksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
