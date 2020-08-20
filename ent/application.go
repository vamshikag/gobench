// Code generated by entc, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"
	"time"

	"github.com/facebook/ent/dialect/sql"
	"github.com/gobench-io/gobench/ent/application"
)

// Application is the model entity for the Application schema.
type Application struct {
	config `json:"-"`
	// ID of the ent.
	ID int `json:"id,omitempty"`
	// Name holds the value of the "name" field.
	Name string `json:"name,omitempty"`
	// Status holds the value of the "status" field.
	Status string `json:"status,omitempty"`
	// CreatedAt holds the value of the "created_at" field.
	CreatedAt time.Time `json:"created_at,omitempty"`
	// UpdatedAt holds the value of the "updated_at" field.
	UpdatedAt time.Time `json:"updated_at,omitempty"`
	// Scenario holds the value of the "scenario" field.
	Scenario string `json:"scenario,omitempty"`
	// Gomod holds the value of the "gomod" field.
	Gomod string `json:"gomod,omitempty"`
	// Gosum holds the value of the "gosum" field.
	Gosum string `json:"gosum,omitempty"`
	// Tags holds the value of the "tags" field.
	Tags string `json:"tags,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the ApplicationQuery when eager-loading is set.
	Edges ApplicationEdges `json:"edges"`
}

// ApplicationEdges holds the relations/edges for other nodes in the graph.
type ApplicationEdges struct {
	// Groups holds the value of the groups edge.
	Groups []*Group
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [1]bool
}

// GroupsOrErr returns the Groups value or an error if the edge
// was not loaded in eager-loading.
func (e ApplicationEdges) GroupsOrErr() ([]*Group, error) {
	if e.loadedTypes[0] {
		return e.Groups, nil
	}
	return nil, &NotLoadedError{edge: "groups"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*Application) scanValues() []interface{} {
	return []interface{}{
		&sql.NullInt64{},  // id
		&sql.NullString{}, // name
		&sql.NullString{}, // status
		&sql.NullTime{},   // created_at
		&sql.NullTime{},   // updated_at
		&sql.NullString{}, // scenario
		&sql.NullString{}, // gomod
		&sql.NullString{}, // gosum
		&sql.NullString{}, // tags
	}
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the Application fields.
func (a *Application) assignValues(values ...interface{}) error {
	if m, n := len(values), len(application.Columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	value, ok := values[0].(*sql.NullInt64)
	if !ok {
		return fmt.Errorf("unexpected type %T for field id", value)
	}
	a.ID = int(value.Int64)
	values = values[1:]
	if value, ok := values[0].(*sql.NullString); !ok {
		return fmt.Errorf("unexpected type %T for field name", values[0])
	} else if value.Valid {
		a.Name = value.String
	}
	if value, ok := values[1].(*sql.NullString); !ok {
		return fmt.Errorf("unexpected type %T for field status", values[1])
	} else if value.Valid {
		a.Status = value.String
	}
	if value, ok := values[2].(*sql.NullTime); !ok {
		return fmt.Errorf("unexpected type %T for field created_at", values[2])
	} else if value.Valid {
		a.CreatedAt = value.Time
	}
	if value, ok := values[3].(*sql.NullTime); !ok {
		return fmt.Errorf("unexpected type %T for field updated_at", values[3])
	} else if value.Valid {
		a.UpdatedAt = value.Time
	}
	if value, ok := values[4].(*sql.NullString); !ok {
		return fmt.Errorf("unexpected type %T for field scenario", values[4])
	} else if value.Valid {
		a.Scenario = value.String
	}
	if value, ok := values[5].(*sql.NullString); !ok {
		return fmt.Errorf("unexpected type %T for field gomod", values[5])
	} else if value.Valid {
		a.Gomod = value.String
	}
	if value, ok := values[6].(*sql.NullString); !ok {
		return fmt.Errorf("unexpected type %T for field gosum", values[6])
	} else if value.Valid {
		a.Gosum = value.String
	}
	if value, ok := values[7].(*sql.NullString); !ok {
		return fmt.Errorf("unexpected type %T for field tags", values[7])
	} else if value.Valid {
		a.Tags = value.String
	}
	return nil
}

// QueryGroups queries the groups edge of the Application.
func (a *Application) QueryGroups() *GroupQuery {
	return (&ApplicationClient{config: a.config}).QueryGroups(a)
}

// Update returns a builder for updating this Application.
// Note that, you need to call Application.Unwrap() before calling this method, if this Application
// was returned from a transaction, and the transaction was committed or rolled back.
func (a *Application) Update() *ApplicationUpdateOne {
	return (&ApplicationClient{config: a.config}).UpdateOne(a)
}

// Unwrap unwraps the entity that was returned from a transaction after it was closed,
// so that all next queries will be executed through the driver which created the transaction.
func (a *Application) Unwrap() *Application {
	tx, ok := a.config.driver.(*txDriver)
	if !ok {
		panic("ent: Application is not a transactional entity")
	}
	a.config.driver = tx.drv
	return a
}

// String implements the fmt.Stringer.
func (a *Application) String() string {
	var builder strings.Builder
	builder.WriteString("Application(")
	builder.WriteString(fmt.Sprintf("id=%v", a.ID))
	builder.WriteString(", name=")
	builder.WriteString(a.Name)
	builder.WriteString(", status=")
	builder.WriteString(a.Status)
	builder.WriteString(", created_at=")
	builder.WriteString(a.CreatedAt.Format(time.ANSIC))
	builder.WriteString(", updated_at=")
	builder.WriteString(a.UpdatedAt.Format(time.ANSIC))
	builder.WriteString(", scenario=")
	builder.WriteString(a.Scenario)
	builder.WriteString(", gomod=")
	builder.WriteString(a.Gomod)
	builder.WriteString(", gosum=")
	builder.WriteString(a.Gosum)
	builder.WriteString(", tags=")
	builder.WriteString(a.Tags)
	builder.WriteByte(')')
	return builder.String()
}

// Applications is a parsable slice of Application.
type Applications []*Application

func (a Applications) config(cfg config) {
	for _i := range a {
		a[_i].config = cfg
	}
}
