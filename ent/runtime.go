// Code generated by entc, DO NOT EDIT.

package ent

import (
	"time"

	"github.com/gobench-io/gobench/ent/application"
	"github.com/gobench-io/gobench/ent/schema"
)

// The init function reads all schema descriptors with runtime
// code (default values, validators or hooks) and stitches it
// to their package variables.
func init() {
	applicationFields := schema.Application{}.Fields()
	_ = applicationFields
	// applicationDescCreatedAt is the schema descriptor for created_at field.
	applicationDescCreatedAt := applicationFields[2].Descriptor()
	// application.DefaultCreatedAt holds the default value on creation for the created_at field.
	application.DefaultCreatedAt = applicationDescCreatedAt.Default.(func() time.Time)
	// applicationDescUpdatedAt is the schema descriptor for updated_at field.
	applicationDescUpdatedAt := applicationFields[3].Descriptor()
	// application.DefaultUpdatedAt holds the default value on creation for the updated_at field.
	application.DefaultUpdatedAt = applicationDescUpdatedAt.Default.(func() time.Time)
	// application.UpdateDefaultUpdatedAt holds the default value on update for the updated_at field.
	application.UpdateDefaultUpdatedAt = applicationDescUpdatedAt.UpdateDefault.(func() time.Time)
	// applicationDescTags is the schema descriptor for tags field.
	applicationDescTags := applicationFields[7].Descriptor()
	// application.DefaultTags holds the default value on creation for the tags field.
	application.DefaultTags = applicationDescTags.Default.(string)
}
