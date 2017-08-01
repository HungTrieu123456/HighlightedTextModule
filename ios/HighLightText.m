//
//  HighLightText.m
//  highlightedText
//
//  Created by 9Fury on 8/1/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "HighLightText.h"

@implementation HighLightText
RCT_EXPORT_MODULE()
-(NSDictionary *) constantsToExport {
  return @{@"FirstModule": @"Highlighted Text"};
}
@end
