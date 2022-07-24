import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Bookmark } from '@prisma/client';
import { GetUser } from 'src/decorator';
import { JwtGuard } from 'src/guard';
import { BookmarkService } from './bookmark.service';
import { BookmarksDto } from './dto/bookmarks.dto';

@Controller('bookmarks')
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  // Get all bookmarks for a user
  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  @Get()
  getUserBookmarks(@GetUser('id') id: number): Promise<Bookmark[]> {
    return this.bookmarkService.getUserBookmarks(id);
  }

  // Create a new bookmark
  @UseGuards(JwtGuard)
  @Post('create')
  createBookmark(
    @Body() body: BookmarksDto,
    @GetUser('id') userId: number,
  ): Promise<Bookmark> {
    return this.bookmarkService.createBookmark(body, userId);
  }
  // Update info in bookmark
  // Delete a bookmark
}
