import {Controller, Get, Req} from '@nestjs/common';
import {Request} from 'express';


@Controller('todos')
export class TodosController {
    @Get('/')
    getIndex(@Req() request: Request): string {
        return `my first controller: ${request.method}`;
    }
}