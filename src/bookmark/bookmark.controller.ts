import { Controller, Get, UseGuards } from '@nestjs/common';
import { Bookmark } from '@prisma/client';
import { GetUser } from 'src/decorator';
import { JwtGuard } from 'src/guard';
import { BookmarkService } from './bookmark.service';

@Controller('bookmarks')
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  // Get all bookmarks for a user
  @UseGuards(JwtGuard)
  @Get()
  getUserBookmarks(@GetUser('id') id: number): Promise<Bookmark[]> {
    return this.bookmarkService.getUserBookmarks(id);
  }
  // Create a new bookmark
  // Update info in bookmark
  // Delete a bookmark
}
